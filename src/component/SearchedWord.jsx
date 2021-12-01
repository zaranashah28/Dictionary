import React, { Component } from 'react'


class SearchedWord extends Component {

    render() {
        // console.log(this.props.data[0].word, "all props")
        // console.log(this.props.data.map((mean) => mean.meanings.map((item) => item.map( e => e.partofSpeech))))

        console.log(this.props.data.map((mean) => mean.meanings.map((item) => item.definitions.map((def) => def.antonyms.map( e => e)))), "meaning")
        return (
            <div className="container">
                <div class="card" style={{ marginTop: '5%' }}>
                    <div class="card-body" style={{ color: "black"}}>
                        <div className="card-title row">
                            <div className="col-3"><h1>{(this.props?.data[0]?.word)} </h1></div>
                            <div className="col-3">[{this.props.data.map(e => e.phonetic)}]</div>
                            <div className="col-2">
                                <audio src={this.props?.data[0]?.phonetics[0]?.audio} controls>Not supported</audio>
                            </div>
                        </div>
                        <hr />
                        <div className="card-body row">

                            <div className="col-6"> <h6>Meaning </h6> </div>
                            <div className="col-6"> <h6>Example </h6> </div>
                            {/* <div className="col-6"> <h6>Synonyms </h6> </div> */}



                            <div className="row">
                                {this.props.data.map((mean) => mean.meanings.map((item) => item.definitions.map((def) => (
                                    <>
                                        <div className="col-6">
                                            <li style={{ fontSize: "50%" }}>{def.definition}</li>
                                        </div>
                                        <div className="col-6">
                                            {/* <li style={{fontSize:"50%"}}>{def.synonyms[0]}</li> */}
                                            {def.example && (
                                                <li style={{ fontSize: "50%" }}>
                                                    {def.example}

                                                </li>
                                            )}

                                        </div>
                                    </>
                                ))))
                                }


                                <hr />

                                {/* <div className="col-6"><li style={{ fontSize: "60%" }}>{this.props?.data[0]?.meanings[1]?.definitions[0]?.definition}</li></div> */}
                            </div>

                        </div>

                        <div className="card-body row">

                            <div className="col-6"> <h6>Synonyms </h6> </div>
                            <div className="col-6"> <h6>Antonyms </h6> </div>
                            {/* <div className="col-6"> <h6>Synonyms </h6> </div> */}



                            <div className="row">
                                {this.props.data.map((mean) => mean.meanings.map((item) => item.definitions.map((def) => def.synonyms.slice(0,2).map((syn)  =>  (
                                    <>
                                        {syn && (
                                        <div className="col-6">
                                            <li style={{ fontSize: "50%" }}>{syn}</li>
                                        </div>
                                        )}
                                    </>
                                )))))
                                }
                                {this.props.data.map((mean) => mean.meanings.map((item) => item.definitions.map((def) => def.antonyms.slice(0,2).map((syn)  =>  (
                                    <>
                                        
                                        <div className="col-6">
                                            <li style={{ fontSize: "50%" }}>{syn}</li>
                                        </div>
                                        
                                    </>
                                )))))
                                }

                                <hr />

                                {/* <div className="col-6"><li style={{ fontSize: "60%" }}>{this.props?.data[0]?.meanings[1]?.definitions[0]?.definition}</li></div> */}
                            </div>

                        </div>


                    </div>

                </div></div>
        )
    }
}

export default SearchedWord
