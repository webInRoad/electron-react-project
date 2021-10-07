import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
// 自定义搜索区域的 div
let SearchDiv = styled.div.attrs({
	className: 'd-flex align-items-center justify-content-between'
})`
	border-bottom: 1px solid #fff;
	span {
		color: #fff;
		padding: 0 10px;
		font: normal 16px/40px '微软雅黑';
	}
	input {
		border: none;
		border-radius: 4px;
		width: 160px;
		margin-left: 10px;
	}
`
const SearchFile = ({ title, onSearch }) => {
	const [isActive, setActive] = useState(false)
	const [value, setValue] = useState('')
	const inputRef = useRef(null)
	const closeSearch = () => {
		setActive(false)
		setValue('')
	}
	useEffect(() => {
		const searchHandle = (ev) => {
			const { keyCode } = ev
			if (isActive) {
				if (keyCode === 13) {
					onSearch(value)
				}
				if (keyCode === 27) {
					closeSearch()
				}
			}
		}
		document.addEventListener('keyup', searchHandle)
		return () => {
			document.removeEventListener('keyup', searchHandle)
		}
	})
	useEffect(() => {
		if (isActive) {
			inputRef.current.focus()
		}
	}, [isActive])
	return (
		<>
			{!isActive && (
				<SearchDiv>
					<span>{title}</span>
					<span onClick={() => setActive(true)}>
						<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
					</span>
				</SearchDiv>
			)}
			{isActive && (
				<SearchDiv>
					<input
						ref={inputRef}
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<span onClick={closeSearch}>
						<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
					</span>
				</SearchDiv>
			)}
		</>
	)
}
SearchFile.propTypes = {
	title: PropTypes.string,
	onSearch: PropTypes.func.isRequired
}
SearchFile.defaultProps = {
	title: '文档列表'
}
export default SearchFile
