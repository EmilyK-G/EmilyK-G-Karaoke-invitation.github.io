import React from 'react';

function Options() {
    return (
        <div className="d-grid gap-2">
            <button className="btn btn-success">I'll Go, sounds fun!</button>
            <a tabindex="0" className="btn btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Nah, I'll sing in the shower</a>
            <button className="btn btn-danger">Nah, I'll sing in the shower</button>
        </div>
    )
}

export default Options