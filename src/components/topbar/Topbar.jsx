import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>khoaadmin</span>
                </div>  
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon/>
                    </div>
                    <img className='topAvatar' src="https://lh3.googleusercontent.com/fife/AAWUweXzCysH-tihF4rbyVVdenzCyZFBpfPMwSiVrtFLtKbXiLn823WvfKWbNxW-s2jt2KWtIdlQcPWKCh5faYrZrMebsBh8agK2Ih6TBMfqjKNmTUw0DZJn6FBN_bKKUi3b8EKmOGKrmv-_mvQBN8MvMBkDxaH21DMfkPVKXFJZUIVquTzwbc-4_ODaYEZBMGGPavX_duCaN-Z3qPI0lxOeDdWGzCcTJ2mUgvCxsZBNd3F4SfQIlxA2I-hIvILN4yZijSEmXb78NgkB3KvP40whebPLRceowpzdrNZNjQufsakbCM5GbZVs9JSOJtfAGiQBqnVM__AkT2FV1CVUjck6KlUGy7rDu9Jw8DEcOu3aK0b-RiJJgLt3-mOUy_enL7XF01sBidt34T_UwDPHmsIrPSB9qiQJddX58sFhNnulWpuyNjdzqbx-2exsa5sZfftwsDzXs4F9fPkk4BvQkxwCrw_nEzs4oLgkKsstRhVnl0JsJEzUCJntAuk2RzweRmgZ-UJAFc9o3krQi6FNpb-Osrq9DjHyN0BR49Uw5B7tByOMh2DmSoVw5sHKyR3a62zkVvDsCTcefzKda5L053zbjHM2Z35VbICJHo6OerKjH_ZILh0rX0aK3wC_JUHcIzFDaSIIb2--2DbXBBaIFjJphel5HmmhF9py8LQalRVglua53pOKXblw0jr9m9v0zLvSUqUafGnemCv6gxw1K5yzm46zEl8Uq2BZ0UyVdAjQ-FqKLZs=s64-c" alt="ava"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
