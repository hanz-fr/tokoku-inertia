import React, { useState } from 'react'
import { Link, Head } from '@inertiajs/react'
import DashboardLayout from './DashboardLayout'

export default function Booth() {
    const [saveOpen, setSaveOpen] = useState(false)
    const [cancelOpen, setCancelOpen] = useState(false)
    const [preview, setPreview] = useState(
        'https://img.freepik.com/vektor-premium/ilustrasi-ikon-warung-makanan-dalam-gaya-garis-besar_1012247-1497.jpg'
    )

    function handleImageChange(e) {
        const file = e.target.files[0]
        if (file) setPreview(URL.createObjectURL(file))
    }

    function handleSave() {
        setSaveOpen(false)
    }

    function handleCancel() {
        setCancelOpen(false)
    }

    return (
        <DashboardLayout>
            <Head title="Booth Profile" />
            <div className="p-4 lg:p-6 w-full">

                <nav className="flex items-center space-x-2 text-sm mb-6">
                    <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-blue-500 fill-current">
                        <svg width="24" height="24" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.5578 5.53423C12.6873 4.69887 11.3127 4.69887 10.4422 5.53423L5.81574 9.97357C5.70239 10.0823 5.62614 10.224 5.5978 10.3785C5.04367 13.4004 5.00277 16.494 5.47681 19.5295L5.58933 20.25H8.56579V14.0387C8.56579 13.6244 8.90158 13.2887 9.31579 13.2887H14.6842C15.0984 13.2887 15.4342 13.6244 15.4342 14.0387V20.25H18.4107L18.5232 19.5295C18.9972 16.494 18.9563 13.4004 18.4022 10.3785C18.3739 10.224 18.2976 10.0823 18.1843 9.97357L13.5578 5.53423ZM9.40363 4.45191C10.8546 3.05965 13.1454 3.05965 14.5964 4.45191L19.2228 8.89125C19.5634 9.21804 19.7925 9.64373 19.8776 10.108C20.4621 13.2956 20.5053 16.559 20.0052 19.7609L19.8245 20.9184C19.7497 21.3971 19.3374 21.75 18.8529 21.75H14.6842C14.27 21.75 13.9342 21.4142 13.9342 21V14.7887H10.0658V21C10.0658 21.4142 9.73 21.75 9.31579 21.75H5.14706C4.66258 21.75 4.25029 21.3971 4.17554 20.9184L3.99478 19.7609C3.49473 16.559 3.53788 13.2956 4.12241 10.108C4.20754 9.64373 4.43662 9.21804 4.77719 8.89125L9.40363 4.45191Z" />
                        </svg>
                    </Link>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z" />
                    </svg>
                    <span className="text-gray-700">Booth Profile</span>
                </nav>

                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-700 mb-2">Booth Profile</h1>
                    <p className="text-gray-600">Manage your booth.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">

                        <div className="bg-white p-6 rounded-lg shadow space-y-4">
                            <h2 className="text-lg font-semibold text-gray-700">Booth Logo</h2>
                            <div className="flex flex-col lg:flex-row gap-4 items-center">
                                <div className="flex flex-col items-center mx-auto mb-4">
                                    <div className="relative">
                                        <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden border border-gray-200">
                                            <img
                                                src={preview}
                                                alt="Booth Logo"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <label
                                            htmlFor="image"
                                            className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors translate-x-1 translate-y-1 cursor-pointer"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <span className="px-4 text-sm text-gray-700">Make sure image is below 5MB</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow space-y-4">
                            <h2 className="text-lg font-semibold text-gray-700">Booth Information</h2>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Booth Name *</label>
                                <input id="name" type="text" placeholder="Enter booth name.." defaultValue="Nama Toko" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea id="description" placeholder="Enter booth description.." className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow space-y-4">
                            <h2 className="text-lg font-semibold text-gray-700">Contact</h2>
                            {[
                                { id: 'email', label: 'Email', type: 'email', placeholder: 'contact@yourcompany.com' },
                                { id: 'phone', label: 'Phone', type: 'tel', placeholder: '0812345678' },
                                { id: 'instagram', label: 'Instagram', type: 'text', placeholder: 'https://instagram.com/' },
                                { id: 'x', label: 'X', type: 'text', placeholder: 'https://x.com/' },
                            ].map((field) => (
                                <div key={field.id}>
                                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                                    <input
                                        id={field.id}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div className="bg-white p-6 rounded-lg shadow space-y-4">
                            <h2 className="text-lg font-semibold text-gray-700">Status</h2>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Visibility:</span>
                                    <span className="text-gray-700 font-medium">Public</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Created:</span>
                                    <span className="text-gray-700 font-medium">4 April 2025</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow space-y-3">
                            <button
                                type="button"
                                onClick={() => setSaveOpen(true)}
                                className="flex items-center justify-center gap-2 w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition-colors fill-current"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.48911 6.2367C3.65493 4.81893 4.85617 3.75 6.28361 3.75H17.0263C17.2084 3.75 17.3843 3.81626 17.5211 3.93641L20.2816 6.3602C20.9022 6.90511 21.245 7.70008 21.2154 8.52543L20.8714 18.0988C20.8182 19.5781 19.6035 20.75 18.1232 20.75H6.11291C4.78329 20.75 3.66076 19.762 3.49191 18.4432C2.99542 14.565 2.97403 10.6407 3.42822 6.75728L3.48911 6.2367ZM6.28361 5.25C5.61719 5.25 5.05637 5.74905 4.97895 6.41096L4.91807 6.93153C4.47805 10.6937 4.49877 14.4955 4.97977 18.2527C5.05277 18.8229 5.53807 19.25 6.11291 19.25H6.75V15C6.75 14.0335 7.5335 13.25 8.5 13.25H15.5C16.4665 13.25 17.25 14.0335 17.25 15V19.25H18.1232C18.7961 19.25 19.3482 18.7173 19.3724 18.0449L19.7164 8.47157C19.7298 8.09641 19.574 7.73505 19.2919 7.48737L16.75 5.2555V7.59998C16.75 8.56647 15.9665 9.34998 15 9.34998H9C8.0335 9.34998 7.25 8.56647 7.25 7.59998V5.25H6.28361ZM8.75 5.25V7.59998C8.75 7.73805 8.86193 7.84998 9 7.84998H15C15.1381 7.84998 15.25 7.73805 15.25 7.59998V5.25H8.75ZM15.75 19.25H8.25V15C8.25 14.8619 8.36193 14.75 8.5 14.75H15.5C15.6381 14.75 15.75 14.8619 15.75 15V19.25Z" />
                                </svg>
                                <span>Save Profile</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setCancelOpen(true)}
                                className="flex items-center justify-center gap-2 w-full p-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white rounded-lg transition-colors fill-current"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.46967 8.46966C8.76256 8.17677 9.23744 8.17677 9.53033 8.46966L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53034 15.5303C9.23744 15.8232 8.76257 15.8232 8.46968 15.5303C8.17678 15.2374 8.17678 14.7626 8.46968 14.4697L10.9393 12L8.46967 9.53032C8.17678 9.23743 8.17678 8.76255 8.46967 8.46966Z" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.31673 3.76876C10.4043 3.42368 13.5957 3.42368 16.6832 3.76876C18.5096 3.97288 19.9845 5.41153 20.1994 7.24849C20.5686 10.4054 20.5686 13.5946 20.1994 16.7515C19.9845 18.5885 18.5096 20.0271 16.6832 20.2313C13.5957 20.5763 10.4043 20.5763 7.31673 20.2313C5.49035 20.0271 4.01545 18.5885 3.8006 16.7515C3.43137 13.5946 3.43137 10.4054 3.8006 7.24849C4.01545 5.41153 5.49035 3.97288 7.31673 3.76876ZM16.5166 5.25948C13.5398 4.92677 10.4602 4.92677 7.48334 5.25948C6.33891 5.38738 5.42286 6.29063 5.29045 7.42274C4.93476 10.4639 4.93476 13.5361 5.29045 16.5773C5.42286 17.7094 6.33891 18.6126 7.48334 18.7405C10.4602 19.0732 13.5398 19.0732 16.5166 18.7405C17.6611 18.6126 18.5771 17.7094 18.7095 16.5773C19.0652 13.5361 19.0652 10.4639 18.7095 7.42274C18.5771 6.29063 17.6611 5.38738 16.5166 5.25948Z" />
                                </svg>
                                <span>Cancel</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {saveOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setSaveOpen(false)} />
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Save Booth Profile?</h3>
                        <p className="text-sm text-gray-500">You can always change this later.</p>
                        <div className="flex flex-row-reverse gap-3 mt-4">
                            <button
                                onClick={handleSave}
                                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-semibold"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setSaveOpen(false)}
                                className="flex-1 px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md text-sm font-semibold"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {cancelOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setCancelOpen(false)} />
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 text-center space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Discard Booth Profile?</h3>
                        <p className="text-sm text-gray-500">All changes will be lost.</p>
                        <div className="flex flex-row-reverse gap-3 mt-4">
                            <button
                                onClick={handleCancel}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-semibold"
                            >
                                Yes, discard
                            </button>
                            <button
                                onClick={() => setCancelOpen(false)}
                                className="flex-1 px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md text-sm font-semibold"
                            >
                                No, keep editing
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}