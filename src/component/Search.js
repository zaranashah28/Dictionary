import React, { Component } from 'react'
import SearchBar from "material-ui-search-bar";
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import SearchedWord from './SearchedWord';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: false,
            value: '',
            word: [],
            isLoading: false,
            success: false

        }
    }

    onRequestSearch(value) {
        if (this.state.value === "") {
            toast.warn("Please enter string to search")
        } else {
            this.setState({ Search: true, isLoading: true })
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.value}`).then((res) => {
                console.log("res", res)
                this.setState({ isLoading: false, success: true })
                toast.success("Success")
                this.setState({ word: res.data })
            }).catch((err) => {
                this.setState({ isLoading: false, value:"",data:"" ,success: false })
                toast.error(err.response.data.title)
                console.log(err.response.data.title)
            })
            console.log(value, "search data")
        }
    }
    onChange = (e) => {
        this.setState({ value: e })
    }
    
    render() {

        return (
            <div>
                <div>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />      </div>
                <SearchBar
                    onChange={this.onChange}
                    onCancelSearch={() => this.setState({ Search: false, value: '' })}
                    onRequestSearch={() => this.onRequestSearch(this.state.value)}
                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
                {this.state.isLoading ? <Box sx={{ paddingTop: "2%", width: '100%' }}>
                    <LinearProgress />
                </Box> : null}
                {  this.state.success && this.state.Search ? <SearchedWord value={this.state.value} data={this.state.word} /> : null}
            </div>
        )
    }
}

export default Search
