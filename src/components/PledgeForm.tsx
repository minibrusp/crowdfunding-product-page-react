import { ChangeEvent, useEffect, useState } from "react";
import PledgeItem from "./PledgeItem";

const pledgeItems = [
    {
			"id": 0,
      "name": "Bamboo Stand",
      "description": "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      "amount": 25,
      "stock": 101,
			"selected": false
    },
    {
			"id": 1,
      "name": "Black Edition Stand",
      "description": "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      "amount": 75,
      "stock": 64,
			"selected": false
    },
    {
			"id": 2,
      "name": "Mahogany Special Edition",
      "description": "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      "amount": 200,
      "stock": 0,
			"selected": false
    },
    {
			"id": 3,
      "name": "Mango Limited Edition",
      "description": "You get a 5 Mango Limited Edition stands, a Backer T-Shirt, a Limited Edition Backpack and a personal thank you You’ll be added to our Backer member list. Shipping is included.",
      "amount": 500,
      "stock": 1,
			"selected": false
    }
  ]

type pledgeItem = {
	id: number,
	name: string,
	description: string,
	amount: number,
	stock: number,
	selected: boolean
}

export default function PledgeForm() {

	const [items, setItems] = useState<pledgeItem[]>([])

	useEffect(() => {
		setItems(pledgeItems)
	}, [])

	useEffect(() => {
		console.log(items);
		
	}, [items])
	

	// const setSelected = (id : number) => {
	// 	setItems(prevItems => [...prevItems.map(item => {
	// 			if(item.id === id) {
	// 				return {
	// 					...item,
	// 					item
	// 				}
	// 			}
	// 			else {
	// 				return {
	// 					...item,
	// 				}
	// 			}
	// 		})]
	// 	)
	// }

	const setSelected = (id : number) => {
		setItems(prevState => prevState.map(item => {
			if(item.id === id) {
				return {
					...item,
					selected: true,
				}
			} else return {
					...item,
					selected: false,
				}
		}))
	}


  return (
    <form action="submit">
        <fieldset id="rewards__fieldset" className="border-none m-0 p-0">
            {/* <PledgeItem value="0" />
            <PledgeItem value="1" /> */}
					
					{
						items.map((item, index) => (
							<PledgeItem 
								key={index}
								id={item.id}
								name={item.name}
								description={item.description}
								value={item.amount}
								isSelected={item.selected}
								setSelected={setSelected}
							/>
						))
					}
						
        </fieldset>
    </form>
  )
}
