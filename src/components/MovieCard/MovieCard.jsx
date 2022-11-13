import React from 'react'

export default function MovieCard() {
  return (
    <div className="card" >
        {/* style="width: 18rem;" */}
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">Card title</h2>
    <p className="card-text">User score Overview</p>
    <h3 className="card-title">Overview</h3>
    <p className="card-text">Overview text</p>
    <h3 className="card-title">Genres</h3>
    <p className="card-text">Genres text</p>

    <a href="/" className="btn btn-primary">Go back</a>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div>
  )
}
