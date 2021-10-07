import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

// 自定义左侧容器
let LeftDiv = styled.div.attrs({
	className: 'col-3 left-panel'
})`
	background-color: #285b41;
	min-height: 100vh;
`
// 自定义右侧容器
let RightDiv = styled.div.attrs({
	className: 'col-9 right-panel'
})`
	background-color: #8b8e86;
`

function App() {
	return (
		<div className="App container-fluid">
			<div className="row no-gutters">
				<LeftDiv>左侧</LeftDiv>
				<RightDiv>右侧</RightDiv>
			</div>
		</div>
	)
}

export default App
