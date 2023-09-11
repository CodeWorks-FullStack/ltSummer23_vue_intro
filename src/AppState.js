import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  health: 100,

  foodItems: [
    { id: 1, name: 'Milk Shoe Doritos', cost: 14.79, img: 'https://images.kybershop.com/2021/06/xBiP6yeF-14-Doritos-Crocs-Crocband-Clog-1.png' },
    { id: 2, name: 'Fruit Treat', cost: 4.79, img: 'https://www.therawtarian.com/sites/default/files/styles/rawt_share/public/com/recipe/pop-tarts-image-0.jpg?itok=TEBBCOAv' }
  ]


})
