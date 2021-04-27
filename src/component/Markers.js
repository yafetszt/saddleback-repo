import React, { Component } from 'react'
import CreateMarker from '../component/CreateMarker'

export default class Markers extends Component {
    render() {
        return (
            <div>
                <CreateMarker name={'Olin'} lat={41.50315} lng={-90.550581} />
                <CreateMarker name={'Hanson'} lat={41.503841} lng={-90.5513} />
                <CreateMarker name={'Gerber Center'} lat={41.502282} lng={-90.550689} />
                <CreateMarker name={'Hanson Expansion'} lat={41.504297} lng={-90.551095} />
                <CreateMarker name={'Old Main'} lat={41.504439} lng={-90.549609} />
                <CreateMarker name={'Bergendoff Hall'} lat={41.505365} lng={-90.548755} />
                <CreateMarker name={'Brunner Theater'} lat={41.504314} lng={-90.548201} />
            </div>
        )
    }
}