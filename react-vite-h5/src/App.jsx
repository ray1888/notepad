import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { ConfigProvider } from 'zarm'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
import 'zarm/dist/zarm.css'

import routes from '../src/router'
function App() {
  return <Router>
    <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
      <Route>
        {
          routes.map(route => <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>)
        }
      </Route>
    </ConfigProvider>
  </Router>
}

export default App