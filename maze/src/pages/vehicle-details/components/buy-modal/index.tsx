import { useState } from 'react'
import { Close } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { useRequest } from '../../../../hooks'
import './style.scss'

export function BuyModal({ handleClickCloseModal }: { handleClickCloseModal: () => void}) {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isFormRequestLoading, setIsFormRequestLoading] = useState<boolean>(false)

    const { postUserMessage } = useRequest()

    function validateBuyModalForm() {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isEmailValid = emailRegex.test(email)

        if (!email) throw new Error('E-mail field cannot be empty')
        
        if (!isEmailValid) throw new Error('Invalid e-mail')
    }

    async function handleSubmitBuyModalForm(e: React.FormEvent) {
        e.preventDefault()
        setIsFormRequestLoading(true)
        try {
            validateBuyModalForm()
            
            await postUserMessage({
                email,
                message
            })
        } catch (error) {
            console.error(error)
        } finally {
            setIsFormRequestLoading(false)
        }
    }

    return <div className='buy-modal-container'>
        <div className="buy-modal-content">
            <button className="close-modal-button" onClick={handleClickCloseModal}><Close /></button>
            <form className="buy-modal-form" onSubmit={handleSubmitBuyModalForm}>
                <span className='modal-text'>One of our vehicles got your attention? Contact us!</span>

                <label className="buy-modal-label">
                    E-mail
                    <input 
                    type="text" 
                    className="email-input" 
                    placeholder='youremail@gmail.com' 
                    onChange={({ target }) => setEmail(target.value)}
                    />
                </label>

                <label className="buy-modal-label">
                    Message
                    <textarea 
                    cols={30} 
                    rows={5} 
                    placeholder='Type your message here'
                    onChange={({ target }) => setMessage(target.value)}
                    className='message-input'
                    >
                    </textarea>
                </label>
                <button className="submit-button">
                    {isFormRequestLoading ? <CircularProgress size={20} style={{ color: 'white'}}/> : 'Send'}
                </button>
            </form>
        </div>
    </div>
}