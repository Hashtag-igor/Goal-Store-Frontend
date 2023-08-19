import React from 'react'
import { ProfileLink, ProfileLinksContainer, ProfileHomeLink, ProfileSlash } from "../styles/SharedFiles"

export default function Links() {
  return (
    <ProfileLinksContainer>
        <ProfileLink to="/"><ProfileHomeLink/></ProfileLink>
        <ProfileSlash> / </ProfileSlash>
        <ProfileLink to="/newcollection">JÁ CONHECE A NOVA COLEÇÃO?</ProfileLink>
        <ProfileSlash> / </ProfileSlash>
        <ProfileLink to="/oldcollection">CAMISAS DA TEMPORADA PASSADA</ProfileLink>
    </ProfileLinksContainer>
  )
}
