import { type FormEvent, useEffect, useRef, useState } from 'react'
import { Loader2, Send } from 'lucide-react'

import { Button } from '@/components/shared/Button'
import { Divider } from '@/components/shared/Divider'
import { Input } from '@/components/shared/Input'
import { type ChatMessage, useSimulationStorage } from '@/hooks/useSimulationStorage'
import { sendChatMessage } from '@/services/aiService'

interface ChatProps {
  simulationId: string
}

export function Chat({ simulationId }: ChatProps) {
  const { getFormData, updateSimulation } = useSimulationStorage()
  const simulation = getFormData(simulationId)

  const [messages, setMessages] = useState<ChatMessage[]>(
    simulation?.chatHistory || []
  )
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim() || !simulation) {
      return
    }

    const userMessage: ChatMessage = { role: 'user', text: inputValue }
    const currentHistory = [...messages, userMessage]

    setMessages(currentHistory)
    setInputValue('')
    setIsLoading(true)

    try {
      const responseText = await sendChatMessage(
        userMessage.text,
        simulation,
        messages 
      )

      const modelMessage: ChatMessage = { role: 'model', text: responseText }
      const finalHistory = [...currentHistory, modelMessage]

      setMessages(finalHistory)

      updateSimulation(simulationId, { chatHistory: finalHistory } as any)
    } catch {
      setMessages([
        ...currentHistory,
        {
          role: 'model',
          text: 'Desculpe, ocorreu um erro de conexão. Tente perguntar novamente.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-8 flex flex-col gap-4">
      <Divider />

      <div>
        <h3 className="text-foreground text-sm font-semibold">
          💬 Converse com seu Educador Financeiro
        </h3>
        <p className="text-muted-foreground mt-1 text-xs">
          Ficou com alguma dúvida sobre o diagnóstico? Pergunte abaixo!
        </p>
      </div>

      <div className="bg-input border-border scrollbar-thin flex h-80 flex-col overflow-y-auto rounded-2xl border p-4">
        {messages.length === 0 && (
          <div className="text-muted-foreground flex h-full items-center justify-center text-center text-sm">
            Nenhuma mensagem ainda. <br /> Comece a conversa!
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              msg.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-[4px_4px_18px_0px_rgba(0,0,0,0.05)] ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-card text-foreground rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="mb-4 flex justify-start">
            <div className="bg-card text-muted-foreground flex items-center gap-2 rounded-2xl rounded-bl-none p-3 text-sm shadow-[4px_4px_18px_0px_rgba(0,0,0,0.05)]">
              <Loader2 size={16} className="animate-spin" />
              Digitando...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="flex gap-2">
        <div className="flex-1">
          <Input
            placeholder="Digite sua dúvida..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          disabled={!inputValue.trim() || isLoading}
          className="px-4"
          aria-label="Enviar mensagem"
        >
          <Send size={18} />
        </Button>
      </form>
    </div>
  )
}