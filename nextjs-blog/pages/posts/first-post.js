import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layoout from '../../components/layout'


export default function FirstPost () {
    return (
        <Layoout>
            <Head>
                <title>初めての投稿です</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>
                        <Image
                            src="/images/profile.jpg"
                            width='100'
                            height='100'
                            alt="プロフィール" />
                    </a>
                </Link>
            </h2>
        </Layoout>
    )
}
