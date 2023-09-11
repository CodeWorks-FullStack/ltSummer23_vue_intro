import { AppState } from "../AppState.js"

class BossService {

  attack() {
    AppState.health -= 10
    if (AppState.health < 0) {
      AppState.health = 0
    }
  }

  restart() {
    AppState.health = 100
  }

}


export const bossService = new BossService()