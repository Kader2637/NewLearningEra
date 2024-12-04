import React from 'react'

const teacher = () => {
    return (
        <div>
            <Routes>
            <Route
                    path="/teacher"
                    element={
                        <PrivateRoute
                            element={<teacherTesting />}
                            allowedRoles={["teacher"]}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default teacher;
