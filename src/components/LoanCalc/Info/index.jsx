import PropTypes from 'prop-types'
import './style.sass'
import { DownArrow } from '@/components/Icons'
import { CurrencyFormat, PercentFormat } from '../utils/Format'

function Info({ amount, years, interestRate, monthlyP }) {
  return (
    <section id="info-container">
      <table>
        <tbody>
          <tr>
            <td colSpan={4}>Your Monthly Payments</td>
          </tr>
          <tr>
            <td colSpan={4}>Base Calculations</td>
          </tr>
          <tr>
            <td>
              <CurrencyFormat value={Number(amount)} />
            </td>
            <td>{years}</td>
            <td>
              <PercentFormat value={Number(interestRate)} />
            </td>
            <td>
              <CurrencyFormat value={Number(monthlyP)} sign={false} />
            </td>
          </tr>
          <tr>
            <td>Loan Amount</td>
            <td>Number of years</td>
            <td>Interest Rate</td>
            <td>Monthly Payments</td>
          </tr>
        </tbody>
      </table>
      <button>Get Started</button>
      <div>
        See your options
        <br />
        <DownArrow />
      </div>
    </section>
  )
}

Info.propTypes = {
  amount: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  interestRate: PropTypes.string.isRequired,
  monthlyP: PropTypes.string.isRequired
}

export default Info
