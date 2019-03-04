import React, { Component } from 'react'
import { isArray } from 'lodash'

export default class Section extends Component {
  render () {
    const {
      section: {
        headline,
        content,
      }
    } = this.props
    return (
      <React.Fragment>
        {
          headline &&
        <h4>{headline}</h4>
        }
        {
          isArray(content)
            ? <ul>
              { content.map((c, i) => (
                <li key={i}>{c}</li>
              ))
              }
            </ul>
            : <p>{content}</p>
        }
      </React.Fragment>
    )
  }
}
