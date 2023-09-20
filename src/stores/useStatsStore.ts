import { create } from "zustand"

export type Stats = {
    "backed"?: number,
    "backers"?: number,
    "days"?: number
}

type StatsStore = {
    stats: Stats,
    fetchStats: (data: string) => Promise<void>,
    updateStats: (amount: number) => void
}

export const useStatsStore = create<StatsStore>() ((set, get) => ({
    stats: {},
    fetchStats: async(data) => {
        const response = await fetch(data)
        const item = await response.json()
        set({ stats: await item[0] })
    },
    updateStats: (backedAmount: number) => {
        const stats = get().stats
        const updated = {
            ...stats,
            backed: stats.backed! + backedAmount,
        }
        set(() => ({
            stats: updated
        }))
    }
}))