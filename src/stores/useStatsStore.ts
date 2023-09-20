import { create } from "zustand"

export type Stats = {
    "backed"?: number,
    "backers"?: number,
    "days"?: number
}

type StatsStore = {
    stats: Stats,
    fetchStats: (data: string) => Promise<void>,
}

export const useStatsStore = create<StatsStore>() ((set) => ({
    stats: {},
    fetchStats: async(data) => {
        const response = await fetch(data)
        const item = await response.json()
        set({ stats: await item[0] })
    },
}))