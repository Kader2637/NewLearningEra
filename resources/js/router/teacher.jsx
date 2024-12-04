import React from 'react'
import SidebarTeacher from '../Layouts/Teacher/SidebarTeacher';

const teacher = () => {
    return (
        <div>
            <Routes>
            <Route
                    path="/teacher"
                    element={
                        <PrivateRoute
                            element={<SidebarTeacher />}
                            allowedRoles={["teacher"]}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default teacher;
