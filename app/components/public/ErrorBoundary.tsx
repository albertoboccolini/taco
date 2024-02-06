'use client'

import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {hasError: false};
    }


    static getDerivedStateFromError(_: Error): State {
        return {hasError: true};
    }

    render() {
        return (
            <>
                <ToastContainer/>
                {this.props.children}
            </>
        );
    }
}

export default ErrorBoundary;