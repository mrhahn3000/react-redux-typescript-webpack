import React from 'react'
import {Link} from '../../Common'
import {Button} from '../../Common'

const HeaderNav = () => {
    return (
        <nav>
            <br/>
            <Link href='https://www.google.com'>Nav 1</Link>
            <br/>
            <Link href='https://www.google.com'>Nav 2</Link>
            <br/>
            <Link href='https://www.google.com'>Nav 3</Link>
            <br/>
            <Button>Click me</Button>
        </nav>
    );
};

export default HeaderNav;
