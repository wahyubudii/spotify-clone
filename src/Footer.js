import React from 'react';
import './Footer.css';
import { Grid, Slider } from '@material-ui/core';

import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return ( <
        div className = 'footer' >
        <
        div className = "footer__left" >
        <
        img src = "https://img.okezone.com/content/2021/09/03/33/2465906/lyodra-konser-di-tepi-pantai-netizen-suaranya-bening-kayak-air-laut-LFgwRi3OwH.jpg"
        alt = "Photo Album"
        className = 'footer_albumLogo' / >
        <
        div className = "footer__songInfo" >
        <
        h4 > Pesan Terakhir < /h4> <
        p > Lyodra < /p> <
        /div> <
        /div>

        <
        div className = "footer__center" >
        <
        ShuffleIcon className = 'footer__green' / >
        <
        SkipPreviousIcon className = 'footer__icon' / >
        <
        PlayCircleOutlineOutlinedIcon fontSize = 'large'
        className = 'footer__icon' / >
        <
        SkipNextIcon className = 'footer__icon' / >
        <
        RepeatIcon className = 'footer__green' / >
        <
        /div>

        <
        div className = "footer__right" >
        <
        Grid container spacing = { 2 } >
        <
        Grid item >
        <
        PlaylistPlayIcon / >
        <
        /Grid> <
        Grid item >
        <
        VolumeDownIcon / >
        <
        /Grid> <
        Grid item xs >
        <
        Slider / >
        <
        /Grid> <
        /Grid> <
        /div> <
        /div>
    )
}

export default Footer;