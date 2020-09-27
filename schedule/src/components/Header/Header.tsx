import React from 'react';
import './Header.css';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import {ISchedule} from '../../redux/types'
import {selectorRole, selectorTemplate} from '../../redux/selectors';
import {setRole, chooseTable, chooseCalendar} from '../../redux/actions';
import {connect} from "react-redux";

interface IProps {
    role: string,
    template: string,
    setRole: any,
    chooseCalendar: Function,
    chooseTable: Function
  }
  
  interface IState {
    store: ISchedule;
  }

class Header extends React.Component<IProps, IState>{

    checkedRole = this.props.role;
    
    handleClickChangeRole = () =>{
        if(this.props.role === "student"){
            this.props.setRole("mentor");
        }
        if(this.props.role === "mentor"){
            this.props.setRole("student");
        }
    }

    handleClickChangeTemplate = () =>{
        if(this.props.template === "calendar"){
            this.props.chooseTable("table");
        }
        if(this.props.template === "table"){
            this.props.chooseCalendar("calendar");
        }
    }

    render(){
        let buttonDefaultClass = 'header__button';
        switch (this.props.template) {
            case "calendar":
                buttonDefaultClass += ' calendar-image';
                break;
            case "table":
                buttonDefaultClass += ' table-image';
                break;
            default:
                buttonDefaultClass += ' calendar-image';
                break;
        }

        return(
            <header className="header">
                <section className="header__content-conteiner navigation-conteiner">
                    <button className={buttonDefaultClass} onClick={this.handleClickChangeTemplate}></button>
                    <a className="header__title" href="/">rs school</a>    
                </section>
                <section className="header__content-conteiner profile-conteiner">
                    <Switch checkedChildren={this.checkedRole}  unCheckedChildren={this.checkedRole === "student"? "mentor": "student"}  onClick={this.handleClickChangeRole} defaultChecked/>
                    <a className="header__profile-button" href="/">My Profile</a>
                </section>
            </header>
        )
    }

}
const mapStateToProps = (store:ISchedule) =>({role: selectorRole(store), template: selectorTemplate(store)});
const mapDispatchToProps = (dispatch:any) =>({
    setRole: (value:string) => dispatch(setRole(value)), 
    chooseCalendar: (value:string) => dispatch(chooseCalendar(value)),
    chooseTable: (value:string) => dispatch(chooseTable(value))

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
