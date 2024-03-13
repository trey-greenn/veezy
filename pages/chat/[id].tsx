import Messages from '@/components/Messages'


export default function Chat(){
    const Topbar = () => {
        return(
            <div className="flex h-[81px] w-[100%] bg-purple-900/10  items-center p-4">
                <span className="material-symbols-outlined text-5xl text-white pr-2">account_circle

                </span>
                <h2 className="text-4xl">w.treygreen@gmail.com</h2>
            </div>
        )
    }
    const Bottombar = () =>{

        return(
            <div className="flex h-[81px] bg-purple-800/10 w-full p-3 rounded-lg">
                    <input placeholder='Type Here' className="w-full rounded-lg bg-gray-900/60 text-white">
                    </input>
                    <button hidden type='submit'/>
            </div>
            )
    }
    return(
    <div className="flex ">
        <Messages/>
        <div className="flex flex-col w-full">
            <Topbar/>
                <div className="flex-1 pt-4 mx-4 overflow-y-scroll">
                    <div className="flex bg-gray-700 w-fit min-w-[100px] rounded-lg p-3 m-1">
                        <p>Trey</p>
                    </div>
                    <div className="flex justify-end">
                    <div className="flex bg-gray-700 w-fit min-w-[100px] rounded-lg p-3 m-1">
                        <p>Trey</p>
                    </div>
                    </div>
                    

                </div>
            <Bottombar/>
        </div>
    </div>
    )
}


