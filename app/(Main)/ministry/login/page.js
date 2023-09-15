import React from 'react'

const page = () => {
  return (
    <div>
       <form action="/login" method="post" class="mt-5 w-50 container"> 
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input name="email" type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input name="password" type="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    </div>
  )
}

export default page;
