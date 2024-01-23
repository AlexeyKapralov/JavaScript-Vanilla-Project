import { BaseScreen } from "../base-screen/base-screen.component";

export class Auth extends BaseScreen {
  constructor(options){
		// без неё наследование не будет работать
		super(options)
	}
  render(){
    this.setTitle('Auth')
    return `<p>Auth</p>`
  }
}