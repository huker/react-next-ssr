/**
 * Created by huk on 2018/1/22.
 */
import Head from 'next/head';
import stylesheet from './styles/theme.less';

export default ({ children }) =>
    <div>
        <Head>
            <meta name="renderer" content="webkit"/>
            <meta charset="utf-8"/>
            <title>苏州承泽医疗</title>
            <meta name="description" content="苏州承泽医疗"/>
            <meta name="author" content="苏州承泽医疗"/>
            <meta name="version" content="<%= htmlWebpackPlugin.options.version %>"/>
            <meta name="commithash" content="<%= htmlWebpackPlugin.options.commithash %>"/>
            <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1"/>
            <meta name="viewport"
                  content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
            <meta name="robots"
                  content="noindex, nofollow, noodp, noarchive, nosnippet, noimageindex, noydir, nocache"/>
            <meta name="referrer" content="origin"/>
            {/*<link rel='stylesheet' href='https://unpkg.com/antd@3/dist/antd.min.css'/>*/}
            {/*<link rel='stylesheet' href='/static/styles.css'/>/*/}
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
        {children}
    </div>