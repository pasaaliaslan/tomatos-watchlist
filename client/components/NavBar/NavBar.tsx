import React from 'react';
import ExpandedNavBar from './ExpandedNavBar';
import TitleOnlyNavBar from './TitleOnlyNavBar';

export default function NavBar({ width }: { width: number }) {
    return width >= 1000 ? <ExpandedNavBar /> : <TitleOnlyNavBar />;
}
