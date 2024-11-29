import { useEffect, useRef, useState } from "react";
import Input from "components/input";
import { FaFacebook } from "react-icons/fa";
function App() {

  const ref = useRef()

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add('opacity-0')
      } else {
        images[total - 1].classList.add('opacity-0')
      }
      images[current].classList.remove('opacity-0')
      if (current === total - 1) {
        current = 0
      } else {
        current += 1
      }
    }
    imageSlider()
    let interval = setInterval(imageSlider, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [ref])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const enabled = username && password

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center">

      <div className="hidden md:block w-[380px] h-[580px] relative bg-logo-pattern bg-[lenght:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[539px] absolute top-[27px] right-[18px] " ref={ref}>
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="./images/screenshot1.png" alt="" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="./images/screenshot2.png" alt="" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="./images/screenshot3.png" alt="" />
          <img className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear" src="./images/screenshot4.png" alt="" />
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border p-[40px] pt-8 pb-2">
          <a href="#" className="flex justify-center mb-8">
            <img className="h-[51px]" src="./images/instagram-logo.png" />
          </a>

          <form className="grid gap-y-1">
            <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number,username or email" />
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
            <button type="submit" disabled={!enabled} className="h-[30px] mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">Log In</button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
            <a href="#" className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
              <FaFacebook size={20} />
              Log in with Facebook
            </a>
            <a href="#" className="flex justify-center items-center text-xs  text-link">
              Forgot Password?
            </a>
          </form>

        </div>

        <div className="bg-white border p-4 justift-center text-sm text-center">
          Don't have an account? <a href="#" className="font-semibold text-brand">Sign up</a>
        </div>
      </div>


    </div>
  );
}

export default App;