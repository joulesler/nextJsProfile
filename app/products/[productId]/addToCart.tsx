'use client'
import React from 'react'
import OrderButton from '@/app/components/orderButton'
import { useRouter } from 'next/navigation'

const AddToCart = () => {
    const router = useRouter()
    var redirect = false
    return (
        <>
            <div onClick={() => {
                (document.getElementById('my_modal_1') as HTMLDialogElement )!.showModal()
                const buttonElement: HTMLButtonElement | null = document.getElementById('close_button_modal') as HTMLButtonElement;
                buttonElement.addEventListener('click', () => {
                    redirect=true
                    router.push("/products")
                });
                setTimeout(() => {
                    ! redirect? router.push("/products") : null
                }
                    , 2000)
            }}>
                <OrderButton />
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Success!</h3>
                    <p className="py-4">Product added to cart</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" id="close_button_modal">Close</button>
                        </form>
                    </div>
                </div>
            </dialog >
        </>
    )
}

export default AddToCart