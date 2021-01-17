/* eslint-disable */
import React, { ReactElement } from "react"
import { useSelector } from "react-redux"
import ReduxStore from "../interfaces/ReduxStoreState"

const Account = (): ReactElement => {
  const AccountState = useSelector((state: ReduxStore) => state.account);

  return (
    <div className="account page">
      <div className="title">
        <h2>MyPoké List</h2>
        {JSON.stringify(AccountState.data)}
      </div>
    </div>
  )
}

export default Account
