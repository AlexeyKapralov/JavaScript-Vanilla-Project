import { BaseScreen } from "../base-screen/base-screen.component"

export class AboutUs  extends BaseScreen{
  constructor(options){
		// ниже важная строчка и без неё наследование не будет работать
		super(options)
	}
  render(){
    this.setTitle('About Us')
    return '<p>About Us</p>'
  }
}