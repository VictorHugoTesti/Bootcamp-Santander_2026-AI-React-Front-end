import type { SimulationRecord } from "@/data/simulation"
import type { ChatMessage } from "@/hooks/useSimulationStorage"

interface GeminiResponse {
  candidates: {
    content: {
      parts: { text: string }[]
    }
  }[]
}

const API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY)
const MODEL_NAME = 'gemini-flash-latest'
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`

const callGeminiAPI = async (prompt: string) => {
  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.status}`)
  }

  return (await response.json()) as GeminiResponse
}

export interface InsightData {
  feasibility: {
    status: 'viable' | 'needs_adjustment' | 'unfeasible'
    content: string
  }
  diagnosis: { content: string }
  suggestions: { items: string[] }
  extraIncome: { items: string[] }
  investment: { items: string[] }
  motivation: { content: string }
}

export const getInsight = async (prompt: string) => {
  const response = await callGeminiAPI(prompt)
  const json = response.candidates[0].content.parts[0].text
  return JSON.parse(json) as InsightData
}

export const sendChatMessage = async (
  message: string,
  simulation: SimulationRecord,
  history: ChatMessage[] = [],
) => {
  const systemContext = `Você é um educador financeiro empático, claro e encorajador.
O usuário está tirando dúvidas sobre sua simulação financeira pessoal:
- Meta: ${simulation.goalName} (Custo: ${simulation.goalAmount}, Prazo: ${simulation.goalDeadline} meses)
- Renda mensal bruta: ${simulation.income}
- Custos fixos essenciais: ${simulation.expenses}
- Dívidas / parcelas: ${simulation.debts}

Responda sempre em segunda pessoa ("você"), com explicações curtas, didáticas e práticas. Fale sempre em português do Brasil.`

  const contents = [
    ...history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ]

  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: systemContext }],
      },
      contents,
    }),
  })

  if (!response.ok) {
    throw new Error(`Erro na requisição do chat: ${response.status}`)
  }

  const json = (await response.json()) as GeminiResponse
  return json.candidates[0].content.parts[0].text
}