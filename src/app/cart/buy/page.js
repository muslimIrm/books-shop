"use client"

import { useEffect, useState } from "react"


const BuyCart = () => {

    const [paymentMethod, setPaymentMethod] = useState(true)
    const [billingAdress, setBillingAdress] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: Number,
        country: "",
        city: "",
        adress1: "",
        adress2: "",
    })
    const [dataBilling, setDataBilling] = useState({
        paymentMethod: paymentMethod ? "Cash On Delivery" : "Online Payment",
        BillingAdress: billingAdress
    })

    useEffect(() => {
        setDataBilling(prev => ({
            paymentMethod: paymentMethod ? "Cash On Delivery" : "Online Payment",
            BillingAdress: billingAdress
        }))

    }, [billingAdress, paymentMethod])


    const [paymentInfo, setPaymentInfo] = useState({
        card_type: "",
        card_number: Number,
        exp_date: "",
        cvv: Number

    })


    const handelCahngePymentInfo = (e) => {
        const { name, value } = e.target;

        setPaymentInfo(prevData => ({
            ...prevData,

            [name]: value
        }))
    }

    const handelCahnge = (e) => {
        const { name, value } = e.target;

        setBillingAdress(prevData => ({
            ...prevData,

            [name]: value

        }))
    }

    const handelSubmit = (e)=>{
        e.stopPropagation;
        alert("dont")
    }
    return (

        <div className="w-full min-h-[70dvh] !py-30">
            <div className="container">
                <div className="w-full relative !py-4 flex flex-col !gap-5 min-h-100 bg-white rounded !px-4">
                    <form className="w-full flex flex-col !gap-4" onSubmit={(p) => handelSubmit(p)}>
                        <div className="w-full flex flex-col !gap-4">
                            <div>
                                <h1 className="text-2xl capitalize text-primary font-bold">payment method</h1>
                            </div>
                            <div className="w-full flex !gap-4">

                                <div className="flex !gap-2 text-center">

                                    <input checked={paymentMethod} onChange={() => setPaymentMethod((p) => !p)} className="!w-5" type="radio" name="myradiogroup" id="myrad1" /><label className="text-lg" htmlFor="myrad1">Cash On Delivery</label>

                                </div>
                                <div className="flex !gap-2 text-center">

                                    <input checked={!paymentMethod} onChange={() => setPaymentMethod((p) => !p)} className="w-5" type="radio" name="myradiogroup" id="myrad2" /><label className="text-lg" htmlFor="myrad2">Online Payment</label>

                                </div>

                            </div>
                            {
                                !paymentMethod &&
                                <div className="w-full flex flex-col ">
                                    <div className="flex justify-center items-center">
                                        <h2 className="text-xl font-bold">Payment Information</h2>
                                    </div>
                                    <div className="w-full flex flex-col !gap-5 text-neutral-500">
                                        <div className="w-full flex flex-col !gap-2">
                                            <label>Cart Type</label>
                                            <select className="input-cart-buy" name={"card_type"} id="card_type" required value={paymentInfo.card_type} onChange={(e) => handelCahngePymentInfo(e)}>
                                                <option selected>---selecr a Card type--</option>
                                                <option value={"visa"}>Visa</option>
                                                <option value={"rupy"}>Rupay</option>
                                                <option value={"master card"}>Master Card</option>
                                            </select>
                                        </div>
                                        <div className="w-full flex flex-col !gap-2">
                                            <label>Card Numbre</label>
                                            <input className="input-cart-buy" type="number" name="card_number" id="Card Number" required value={paymentInfo.card_number} onChange={(e) => handelCahngePymentInfo(e)} />
                                        </div>
                                        <div className="w-full flex flex-col !gap-2">
                                            <label>Expiration Date</label>
                                            <input className="input-cart-buy" type="date" name="exp_date" id="exp_date" required value={paymentInfo.exp_date} onChange={(e) => handelCahngePymentInfo(e)} />
                                        </div>
                                        <div className="w-full flex flex-col !gap-2">
                                            <label>CVV</label>
                                            <input className="input-cart-buy" type="number" name="cvv" id="CVV" required value={paymentInfo.cvv} onChange={(e) => handelCahngePymentInfo(e)} />
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>

                        <div className="w-full flex flex-col !gap-4">
                            <div>
                                <h1 className="text-2xl capitalize text-primary font-bold">Billing Address</h1>
                            </div>
                            <div className="w-full flex flex-col !gap-5 text-neutral-500">
                                <div className="div-cart">
                                    <div className="flex flex-col !gap-3">
                                        <label>First Name*</label>
                                        <input className="input-cart-buy" required name={"firstName"} value={billingAdress.firstName} onChange={(e) => handelCahnge(e)} />
                                    </div>
                                    <div className="flex flex-col !gap-3">
                                        <label>Last Name*</label>
                                        <input required className="input-cart-buy" name={"lastName"} value={dataBilling.BillingAdress.lastName} onChange={(e) => handelCahnge(e)} />
                                    </div>
                                </div>

                                <div className="flex flex-col !gap-3">
                                    <label>Number Phone*</label>
                                    <input className="input-cart-buy" required type="number" name={"phoneNumber"} value={billingAdress.phoneNumber} onChange={(e) => handelCahnge(e)} />

                                </div>


                                <div className="div-cart">
                                    <div className="flex flex-col !gap-3">
                                        <label>Conuntry*</label>
                                        <select required className="input-cart-buy" value={billingAdress.country} name={"country"} onChange={(e) => setDataBilling(p => ({ ...p, BillingAdress: { [e.name]: e.value } }))}>
                                            <option value={"Iraq"}>Iraq</option>
                                            <option value={"japan"}>Japan</option>
                                            <option value={"Iran"}>Iran</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col !gap-3">
                                        <label>City*</label>
                                        <input required className="input-cart-buy" name={"city"} value={billingAdress.city} onChange={(p) => handelCahnge(p)} />
                                    </div>
                                </div>

                                <div className="flex flex-col !gap-3">
                                    <label>Address 1 *</label>
                                    <input required className="input-cart-buy" name={"adress1"} value={billingAdress.adress1} onChange={(p) => handelCahnge(p)} />
                                </div>


                                <div className="flex flex-col !gap-3">
                                    <label>Address 2</label>
                                    <input className="input-cart-buy" name={"adress2"} value={billingAdress.adress2} onChange={(p) => handelCahnge(p)} />
                                </div>
                                <div className="flex w-full justify-center">
                                    <button type={"submit"} className="btn">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default BuyCart