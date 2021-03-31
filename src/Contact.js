import React, { useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap'

const Contact = () => {
    const capchaRef = useRef()
    const formRef = useRef()
    const resizeWindow = () => {
        const width = formRef.current.clientWidth
        const scale = width / 302
        capchaRef.current.style["transform"] = `scale(${scale})`
        capchaRef.current.style["-webkit-transform"] = `scale(${scale})`
        capchaRef.current.style["transform-origin"] = '0 0'
        capchaRef.current.style["-webkit-transform-origin"] = '0 0'
        return
    }
    useEffect(() => {
        resizeWindow()
    }, [])
    window.addEventListener("resize", resizeWindow)
    return (<Form method="post" action="submit.php" style={{ padding: 20, width: "100%", maxWidth: "400px" }}>
        <Form.Group >
            <Form.Label>Name:</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group >
            <Form.Label>Email address:</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" as={"textarea"} type="textarea" placeholder="Message" />
        </Form.Group>
        <Form.Group ref={formRef}>
            <div className="g-recaptcha" ref={capchaRef} data-sitekey="6LeiGC8UAAAAAN3FUbepTuaO2AWAk5VPpWvNT3IV"></div>
        </Form.Group>
        <Form.Group>
            <Button id="submit" name="submit" variant="dark" className="mt-5 mx-auto " type="submit">
                Submit
            </Button>
        </Form.Group>
    </Form>)
}

export default Contact