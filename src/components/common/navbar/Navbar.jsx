import React from 'react'
import './Navbar.css'

function Navbar(){
    return (
        <section>
                <table className="navList">
                    <tr>
                        <td className=".innerList">
                            <a className="dash" href="/dashboard">How it works</a>
                        </td>
                        <td className=".innerList">
                            <a className="dash" href="/dashboard">Nutrition Guideline</a>
                        </td>
                    </tr>
                </table>
            
        </section>
    )
}

export default Navbar;