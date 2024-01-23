import React from 'react'

const DashboardLayout = ({
    children,
    users,
    revenue,
    notifications,
    login
}: {
    children: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
    notifications: React.ReactNode
    login: React.ReactNode
}) => {
    const loggedIn = false
    return loggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" , padding: "1rem"}}>
                    <div style={{display: "flex", margin: "1rem",padding: "1rem"}} className="card w-96 bg-base-100 shadow-xl">{users}</div>
                    <div style={{display: "flex", margin: "1rem",padding: "1rem"}} className="card w-96 bg-base-100 shadow-xl">{revenue}</div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" style={{ display: "flex", flex: 1, margin: "1rem", padding: "1rem"}}>{notifications}</div>
            </div>
        </div>
    ) : (
        <div>
            {login}
        </div>
    )
}

export default DashboardLayout