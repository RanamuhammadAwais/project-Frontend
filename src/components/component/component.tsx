/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vlzs4x1KFML
 */
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function Component() {
  return (
    <div className="min-h-screen bg-white p-8">
    
      <main className="mt-12 flex justify-between">
        <section className="w-1/2 space-y-6">
          <h2 className="ml-4 text-6xl font-bold leading-tight">
            Create an AIbot that serves your sales teams and your customer support
          </h2>
          <p className="text-lg ml-4">Support at every step of the way.</p>
          {/* <div className="flex space-x-4">
            <Button variant="default">What can you do?</Button>
            <Button variant="outline">Learn about customer's team</Button>
            <Button variant="secondary">Sell it now</Button>
          </div> */}
          <section className=" border rounded-md bg-gray-50 ">
            
           <div >
           <div className="w-10/12 flex space-x-4">
             <span className=" max-h-fit p-3">
              <span className="mr-9 " >
               <Button variant="default" className=" rounded-2xl p-6 m-3 mb-10 border bg-black text-white" >Hi there i am labbot</Button>
              </span>
                <div className="m-8 h-6 w-6 rounded-full bg-black"></div>
                <div className="m-8 h-3 w-3 rounded-full bg-black"></div>
              <span className="flex justify-self-end m-8">
                <Button variant="default" className="border p-5 mr-10 bg-blue-500 text-white rounded-xl ">What can you do?</Button>
               <Button variant="outline" className="border ml-10 bg-blue-500 text-white  rounded-xl mr-10" >Learn about customer's team</Button>
               <Button variant="secondary" className=" ml-10 border bg-green-500 text-white rounded-xl">Sell it now</Button>
             </span>


             </span>
           </div>
  
           </div>
           </section>



        </section>
        <section className="w-10/14 bg-gray-50 rounded-xl shadow-lg p-8 space-y-4">
          <h3 className="text-xl font-semibold">Account creation</h3>
          <form className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="email">
                E-Mail
              </label>
              <Input id="email" placeholder="hello@uiux.com" type="email" />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="Phone">
                Phone
              </label>
              <Input id="Phone" placeholder="+7 995 123 50 40" type="Phone" />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="Confirmation code">
              Confirmation code
              </label>
              <Input id="Confirmation code" placeholder="06-08" type="Confirmation code" />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="Create Password">
              Create Password
              </label>
              <Input id="email" placeholder="Dfs@sdfe2" type="Create Password" />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="Company Name">
              Company Name
              </label>
              <Input id="password" placeholder="Dfs@sdfe2" type="password" />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium" htmlFor="Link for Website">
              Link for Website
              </label>
              <Input id="password" placeholder="Dfs@sdfe2.com" type="password" />
            </div>
           
            <Checkbox id="terms" />
            <label className="text-sm" htmlFor="terms">
             <span className="mr-2 ml-2">I agree to the </span>
              
              <a href="#" className="text-blue-500">terms and conditions</a>
              
            </label>

            <div>
            <Button className="border rounded-full bg-blue-500 text-white hover">Create an account</Button>
            </div>
          </form>
          <div className="text-sm inline-flex space-x-8">
            
              <span className="mr-5">Already have an account?</span>
              <a className=" text-red-500 " href="#">
                <span className="ml-10">Forgot your password?</span>
              </a>
        
          </div>
          <div>
                 <a className="text-blue-600  " href="#">
                 Sign in
                 </a>
                </div>
        </section>
      </main>
    
    </div>
  )
}


function BellIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function TextIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


// function SmartphoneIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
//       <path d="M12 18h.01" />
//     </svg>
//   )
// }
