import React from 'react'
import './Header.css'

type MyPropsType = {}
type MyStateType = { menu: string; menuItem: string; status: string }

export class Header extends React.Component<MyPropsType, MyStateType> {
  constructor(props: any) {
    super(props)
    this.state = {
      menu: 'close',
      menuItem: 'default',
      status: 'student',
    }
  }

  openMenu = (event: React.MouseEvent): void => {
    this.setState(() => {
      return {
        menu: 'open',
      }
    })
  }

  changeStatus = (event: React.MouseEvent): void => {
    event.preventDefault()
    this.setState(() => {
      return {
        status: 'mentor',
      }
    })
  }

  render() {
    let buttonDefaultClass = 'header__button-burger'
    switch (this.state.menu) {
      case 'open':
        buttonDefaultClass += ' close-image'
        break
      case 'calendar':
        buttonDefaultClass += ' calendar-image'
        break
      case 'table':
        buttonDefaultClass += ' table-image'
        break
      case 'notes':
        buttonDefaultClass += ' notes-image'
        break
      default:
        buttonDefaultClass += ' default-image'
        break
    }

    return (
      <header className="header">
        <section className="header__content-conteiner navigation-conteiner">
          <button
            className={buttonDefaultClass}
            onClick={this.openMenu}
          ></button>
          <a className="header__title" href="/">
            rs school
          </a>
          <nav
            className={
              this.state.menu === 'open'
                ? 'header__navigation open_menu'
                : 'header__navigation menuClose'
            }
          >
            <ul className="navigation__list">
              <li className="list__item table">
                <a className="item__link" href="/" id="table">
                  Table
                </a>
              </li>
              <li className="list__item calendar">
                <a className="item__link" href="/" id="calendar">
                  Calendar
                </a>
              </li>
              <li className="list__item notes">
                <a className="item__link" href="/" id="notes">
                  Note
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="header__content-conteiner profile-conteiner">
          <a
            className="profile-status header__toggle-button"
            href="/"
            onClick={this.changeStatus}
          >
            {this.state.status}
          </a>
          <a className="header__profile-button" href="/">
            My Profile
          </a>
        </section>
      </header>
    )
  }
}
