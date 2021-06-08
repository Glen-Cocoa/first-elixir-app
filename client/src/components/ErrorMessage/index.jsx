import React from 'react'

const styles = {
  errorMessage: {
    display: 'inline-block'
  }
}
export default function ErrorMessage({ shown, errors }) {
  return shown ? (
    <div style={styles.errorMessage}>
      {Object.entries(errors).map(([key, value]) => {
        return value && <p key={key}> Error: {key} </p>
      })}
    </div>
  ) : null
}
