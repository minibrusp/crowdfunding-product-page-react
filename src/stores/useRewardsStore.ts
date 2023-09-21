import { create } from "zustand"

type Reward = {
    "id": number,
    "name": string,
    "description": string,
    "amount": number,
    "stock": number,
    "selected": boolean,
    "noreward"?: boolean
}

type RewardsStore = {
    rewards: Reward[],
    fetchRewards: () => Promise<void>,
    getRewardsFromLocalStorage: () => {},
    setSelected: (id: number) => void,
    setSelectedReward: (id: number) => void,
    resetSelected: () => void,
    reduceStock: (id: number) => void
}

// const requestHeaders: HeadersInit = new Headers();
// requestHeaders.set('Content-Type', 'application/json');
// requestHeaders.set('X-Master-Key', '$2b$10$5M7BV6svTuUGs5VN9YqniO99fwvEsfDtYudnBKC5GcHy9V3rIpw2e');
// requestHeaders.set('X-Bin-Meta', 'false');
// requestHeaders.set('X-JSON-Path', '$.rewards.*');

export const useRewardsStore = create<RewardsStore>() ((set, get) => ({
    rewards: [],
    fetchRewards: async() => {
        const response = await fetch(`https://api.jsonbin.io/v3/b/650c97c212a5d3765981384b`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-Master-Key': `$2b$10$5M7BV6svTuUGs5VN9YqniO99fwvEsfDtYudnBKC5GcHy9V3rIpw2e`,
                'Content-Type': 'application/json',
                'X-Bin-Meta': 'false',
                'X-JSON-Path': '$.rewards.*'
            },
        })
        const result = await response.json()
        set({ rewards:  await result })
        await localStorage.setItem('rewards', JSON.stringify(result))
    },
    getRewardsFromLocalStorage: async () => {
        const rewards = JSON.parse(localStorage.getItem('rewards')!)
        set({ rewards: await rewards })
    },
    setSelected: (id: number) => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            if(reward.id === id) {
				return {
					...reward,
					selected: true,
				}
			} else return {
					...reward,
					selected: false,
			}
        })
        set(() => ({
            rewards: updated
        }))
    },
    setSelectedReward: (id: number) => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            if(reward.id === id) {
                return {
                    ...reward,
                    selected: true,
                }
            } else return {
                ...reward
            }
        })
        set(() => ({
            rewards: updated
        }))
    },
    resetSelected: () => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            return {
                ...reward,
                selected: false
            }
        })
        set(() => ({
            rewards: updated
        }))
    },
    reduceStock: (id: number) => {
        const rewards = get().rewards
        const updated = rewards.map(reward => {
            if(reward.id === id) {
                return {
                    ...reward,
                    stock: reward.stock - 1
                }
            } else {
                return { ...reward }
            }
        })
        set(() => ({
            rewards: updated
        }))
        localStorage.setItem('rewards', JSON.stringify(updated))
    }
}))