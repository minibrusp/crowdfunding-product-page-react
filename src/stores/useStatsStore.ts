import { create } from "zustand"

export type Stats = {
    "backed"?: number,
    "backers"?: number,
    "days"?: number
}

type StatsStore = {
    stats: Stats,
    statsContainerRef: HTMLDivElement | null
    fetchStats: () => Promise<void>,
    getStatsFromLocalStorage: () => {},
    updateStats: (amount: number) => void,
    SaveStatsContainerRef: (el: HTMLDivElement) => void
}

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Access-Control-Allow-Origin', '*');
requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('X-Master-Key', '$2b$10$5M7BV6svTuUGs5VN9YqniO99fwvEsfDtYudnBKC5GcHy9V3rIpw2e');
requestHeaders.set('X-Bin-Meta', 'false');
requestHeaders.set('X-JSON-Path', '$.stats.*');


export const useStatsStore = create<StatsStore>() ((set, get) => ({
    stats: {},
    statsContainerRef: null,
    fetchStats: async() => {
        const response = await fetch(`https://api.jsonbin.io/v3/b/650c97c212a5d3765981384b`, {
            method: 'GET',
            headers: requestHeaders,
        })  
        const item = await response.json()
        set({ stats: await item[0] })
        await localStorage.setItem('stats', JSON.stringify(item[0]))
    },
    getStatsFromLocalStorage: async () => {
        const stats = JSON.parse(localStorage.getItem('stats')!)
        set({ stats: await stats })
    },
    updateStats: (backedAmount: number) => {
        const stats = get().stats
        const updated = {
            ...stats,
            backed: stats.backed! + backedAmount,
            backers: stats.backers! + 1,
        }
        set(() => ({
            stats: updated
        }))
        localStorage.setItem('stats', JSON.stringify(updated))
    },
    SaveStatsContainerRef: (el: HTMLDivElement) => {
        set({ statsContainerRef: el})
    },
}))