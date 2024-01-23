import { BaseScreen } from "../base-screen/base-screen.component";

export class Home extends BaseScreen{
  constructor(options){
    super(options)
  }
  render(){
    this.setTitle('Home')
    return '<p>Home</p>'
  }
}