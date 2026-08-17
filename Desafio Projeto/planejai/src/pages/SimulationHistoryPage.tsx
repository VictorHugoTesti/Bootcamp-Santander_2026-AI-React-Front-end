import { CalendarClock, Eye, Goal, Trash2, Wallet } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/shared/Button'
import { PageHero } from '@/components/shared/PageHero'
import { type SimulationRecord } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'

export function SimulationHistoryPage() {
  const navigate = useNavigate()
  const { getAllSimulations, deleteSimulation } = useSimulationStorage()
  const [history, setHistory] = useState<SimulationRecord[]>([])

  useEffect(() => {
    const validRecords = getAllSimulations().filter((record) => record.id)
    setHistory(validRecords)
  }, [])

  const handleDelete = (id: string) => {
    if (!id) return

    if (window.confirm('Tem certeza que deseja excluir esta simulação do histórico?')) {
      deleteSimulation(id)
      setHistory(getAllSimulations().filter((record) => record.id))
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Histórico de Simulações"
        subtitle="Veja e acompanhe seus atuais e futuros planejamentos."
      />

      {history.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-(--border) py-20 text-center">
          <Wallet size={48} className="mb-4 text-muted-foreground opacity-50" />
          <p className="mb-6 text-muted-foreground">Você ainda não realizou nenhuma simulação.</p>
          <Button variant="primary" onClick={() => void navigate('/')}>
            Fazer minha primeira simulação
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {history.map((record) => (
            <div
              key={record.id}
              className="flex flex-col justify-between rounded-2xl bg-card p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]"
            >
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Goal size={20} className="text-primary" />
                  <h3
                    className="truncate text-lg font-semibold text-foreground"
                    title={record.goalName}
                  >
                    {record.goalName}
                  </h3>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between border-b border-(--border) pb-2">
                    <span className="text-sm text-muted-foreground">Valor da Meta</span>
                    <strong className="text-foreground">{record.goalAmount}</strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-(--border) pb-2">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CalendarClock size={14} /> Prazo
                    </span>
                    <strong className="text-foreground">{record.goalDeadline} meses</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-sm text-muted-foreground">Renda declarada</span>
                    <strong className="text-foreground">{record.income}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-3">
                <Button
                  variant="secondary"
                  className="flex-1 border-red-500/20 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                  onClick={() => handleDelete(record.id)}
                >
                  <Trash2 size={16} />
                  <span className="hidden sm:inline">Excluir</span>
                </Button>
                <Button
                  variant="primary"
                  className="flex-2"
                  onClick={() => void navigate(`/resultado/${record.id}`)}
                >
                  <Eye size={16} />
                  Ver detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
