import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const LoveLetter = () => {
    return (
        <section className="py-24 px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Darker romantic background for this section */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/50 to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl w-full bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 relative"
            >
                <div className="absolute -top-6 -left-6 text-love-red/20 animate-pulse">
                    <Sparkles size={64} />
                </div>
                <div className="absolute -bottom-6 -right-6 text-love-red/20 animate-pulse delay-700">
                    <Sparkles size={64} />
                </div>

                <div className="space-y-8 text-center">
                    <motion.div
                        className="space-y-6 text-gray-800 font-display text-lg md:text-xl leading-relaxed"
                    >
                        <p>
                            You run through my veins<br/>
                            like a forbidden drug,<br/>
                            not healing me,<br/>
                            but keeping me alive.
                        </p>
                        <p>
                            Without you,<br/>
                            my pulse forgets its purpose.<br/>
                            Your eyes, ah, your eyes<br/>
                            they are the antidote<br/>
                            to my sleepless skies,<br/>
                            black constellations collapsing<br/>
                            every time you look my way.
                        </p>
                        <p>
                            I don’t pretend to understand<br/>
                            the journeys written for us,<br/>
                            the roads carved with absence,<br/>
                            but the time we are loaned<br/>
                            fragile, burning.<br/>
                            I cradle it like contraband hope.
                        </p>
                        <p>
                            I wish you were here.<br/>
                            Distance is not miles,<br/>
                            it’s the slow ache of wanting,<br/>
                            the cruel space between<br/>
                            my hands and your warmth.
                        </p>
                        <p>
                            Yet I swear<br/>
                            with every scar I wear,<br/>
                            with every flaw I flaunt…<br/>
                            I will kiss your soul<br/>
                            again and again,<br/>
                            whenever you dare come close.
                        </p>
                        <p>
                            Your smile<br/>
                            the prettiest sin I’ve ever known.<br/>
                            Your tenderness<br/>
                            a quiet devotion that ruins me sweetly.
                        </p>
                        <p>
                            If loving you is a gamble,<br/>
                            then let the odds bleed me dry,<br/>
                            because tonight,<br/>
                            and every night after<br/>
                            I am the luckiest soul<br/>
                            still breathing your name.😩
                        </p>
                    </motion.div>

                    <div className="pt-8 flex justify-end">
                        <span className="font-display text-2xl text-love-red italic">~Billuu.!!</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
