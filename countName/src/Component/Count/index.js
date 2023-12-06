import './index.css'

const Count = props => {
  const {Detail} = props
  const {name, countLength} = Detail

  return (
    <li>
      <p>
        {name}:{countLength}
      </p>
    </li>
  )
}

export default Count
