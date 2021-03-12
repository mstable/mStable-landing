import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 2rem;
  input {
    appearance: none;
    outline: none;
    user-select: none;
    background: rgb(255, 255, 255);
    color: rgb(37, 39, 45);
    cursor: pointer;
    padding: 8px 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin-left: 8px;
  }
`

const Signup = () => (
  <Wrapper id="mc_embed_signup" className="email-subscription">
    <form
      action="https://mstable.us20.list-manage.com/subscribe/post?u=2e21fb84ad1d1a9efaed19688&amp;id=e2c186e2c7"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll">
        <div>
          <input type="email" name="EMAIL" autoComplete="off" placeholder="Email address" id="mce-EMAIL" />
          <input type="submit" value="➔" name="subscribe" id="mc-embedded-subscribe" />
          <div hidden style={{ display: 'none' }}>
            <strong>Subs </strong>
            <ul>
              <li>
                <input type="radio" value="1" name="group[1781]" id="mce-group[1781]-1781-0" defaultChecked />
                <label htmlFor="mce-group[1781]-1781-0">Testnet</label>
              </li>
              <li>
                <input type="radio" value="2" name="group[1781]" id="mce-group[1781]-1781-1" />
                <label htmlFor="mce-group[1781]-1781-1">Subscribers</label>
              </li>
            </ul>
          </div>
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: 'none' }} />
            <div id="mce-success-response" style={{ display: 'none' }} />
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_2e21fb84ad1d1a9efaed19688_e2c186e2c7" tabIndex={-1} />
          </div>
        </div>
      </div>
    </form>
  </Wrapper>
)

export default Signup
