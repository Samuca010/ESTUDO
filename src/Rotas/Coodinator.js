    export const goToHome = (navigate) => {
        navigate("/")
    }
    export const goToLast = (navigate) => {
        navigate(-1)
    }
    export const goToLogin = (navigate) => {
        navigate("/login")
    }
    export const goToAdmin = (navigate) => {
        navigate("/admin/trips")
    }
    export const goToCreateTrip = (navigate) => {
        navigate("/admin/trips/create")
    }
    export const goToList = (navigate) => {
        navigate("/trips/list")
    }
    export const goToForm = (navigate) => {
        navigate("/trips/application")
    }
    export const goToDetails = (navigate) => {
        navigate("/admin/trips/:id")
    }
