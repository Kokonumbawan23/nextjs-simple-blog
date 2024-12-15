export default function CircularLoadingBar(){
    return (
    <div className="relative w-20 h-20 mx-auto my-20">
        <div className="absolute top-1/2 left-1/2 w-16 h-16 mt-[-32px] ml-[-32px] border-4 border-solid border-white border-t-transparent border-r-transparent rounded-full animate-spin"></div>
    </div>
    )
}