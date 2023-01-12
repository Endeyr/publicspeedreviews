import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'

export default function NewInternetSpeed() {
	return (
		<div className="bg-white p-8 rounded-md w-full">
			<div className=" flex items-center justify-between pb-6">
				<div>
					<h2 className="text-4xl text-gray-600 font-semibold">
						Log Internet Speed
					</h2>
				</div>
			</div>
		</div>
	)
}
